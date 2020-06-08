using Domain.Interfaces;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Services
{
    public class CitationService : AppService<Citation>, ICitationService
    {
        public CitationService(CitedContext ctx) : base(ctx)
        {

        }
    }

    public class CategoryService : AppService<Category>, ICategoryService
    {
        public CategoryService(CitedContext ctx) : base(ctx)
        {

        }
    }
}
