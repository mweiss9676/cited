using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Services
{
    public partial class CategoryService 
    {
        public IQueryable<Category> GetAllForUser(string aspNetUserId)
        {
            return GetAll().Where(x => x.AspNetUserId == aspNetUserId);
        }
    }
}
