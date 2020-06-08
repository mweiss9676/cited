using Domain.Models;

namespace Domain.Interfaces
{
    public partial interface ICitationService : IAppService<Citation> { }
    public partial interface ICategoryService : IAppService<Category> { }
}
