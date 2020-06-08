using Domain.Models;
using System.Linq;

namespace Domain.Interfaces
{
    public partial interface ICategoryService
    {
        IQueryable<Category> GetAllForUser(string aspNetUserId);
    }

}
