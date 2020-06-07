using System.Linq;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IAppService<T>
    {
        Task<int> AddOrUpdateAsync(T item);

        IQueryable<T> GetAll();

        Task<T> Get(int id);

        Task<int> Delete(T item);
    }
}
