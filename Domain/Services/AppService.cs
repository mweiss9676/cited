using Domain.Interfaces;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Services
{
    public class AppService<T> : IAppService<T> where T : class, IWebModel, new()
    {
        protected readonly CitedContext _ctx;

        public AppService(CitedContext ctx)
        {
            _ctx = ctx;
        }

        public virtual async Task<int> AddOrUpdateAsync(T item)
        {
            if(item.Id == 0)
            {
                _ctx.Set<T>().Add(item);
            }

            return await _ctx.SaveChangesAsync();
        }

        public virtual async Task<int> Delete(T item)
        {
            item.IsDeleted = true;

            return await _ctx.SaveChangesAsync();
        }

        public virtual async Task<T> Get(int id)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Id == id);
        }

        public virtual IQueryable<T> GetAll()
        {
            return  _ctx.Set<T>().Where(x => !x.IsDeleted);
        }
    }
}
