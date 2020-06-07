using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Domain.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Domain.Models
{
    public partial class CitedContext 
    {
        IHttpContextAccessor _httpContextAccessor;

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder)
        {
            foreach (var type in modelBuilder.Model.GetEntityTypes())
            {
                if (typeof(IWebModel).IsAssignableFrom(type.ClrType))
                {
                    modelBuilder.SetSoftDeleteFilter(type.ClrType);
                }
            }
        }

        public override int SaveChanges()
        {
            ApplyMetaDataFields();

            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken)
        {
            ApplyMetaDataFields();

            return await base.SaveChangesAsync();
        }

        private void ApplyMetaDataFields()
        {
            var userName = "System";

            if (_httpContextAccessor != null)
            {
                userName = _httpContextAccessor.HttpContext?.User.Identity.Name;
            }

            if (string.IsNullOrWhiteSpace(userName)) userName = "System";

            var now = DateTimeOffset.UtcNow;
            var modifiedEntries = ChangeTracker.Entries()
                .Where(x => (x.State == EntityState.Added || x.State == EntityState.Modified || x.State == EntityState.Deleted))
                .Where(x => x.Entity.GetType().GetInterfaces().Contains(typeof(IWebModel)))
                .ToList();

            foreach (var entry in modifiedEntries)
            {
                if (!(entry.Entity is IWebModel)) continue;
                var entity = (IWebModel)entry.Entity;

                if (entry.State == EntityState.Added)
                {
                    entity.CreatedBy = userName;
                    entity.CreatedDate = now;
                    entity.UpdatedBy = userName;
                    entity.UpdatedDate = now;
                }
                else
                {
                    Entry(entity).Property(x => x.CreatedBy).IsModified = false;
                    Entry(entity).Property(x => x.CreatedDate).IsModified = false;
                }

                if (entry.State == EntityState.Modified)
                {
                    entity.UpdatedBy = userName;
                    entity.UpdatedDate = now;
                }

                if(entry.State == EntityState.Deleted)
                {
                    entity.UpdatedBy = userName;
                    entity.UpdatedDate = now;
                    entry.State = EntityState.Modified;
                }
            }
        }
    }
}
