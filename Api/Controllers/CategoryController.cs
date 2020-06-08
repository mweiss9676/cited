using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Dtos;
using Domain.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService, IMapper mapper)
        {
            _mapper = mapper;
            _categoryService = categoryService;
        }

        [HttpGet("{aspnetuserid}")]
        public IActionResult Get(string aspNetUserId)
        {
            //var categories = _categoryService.GetAllForUser(aspNetUserId);
            //var model = _mapper.Map<List<CategoryDto>>(categories);

            var model = new List<CategoryDto>()
            {
                new CategoryDto() { Id = 1, Name = "Test 1", ParentCategoryId = null },
                new CategoryDto() { Id = 2, Name = "Test 2", ParentCategoryId = null },
                new CategoryDto() { Id = 3, Name = "Test 3", ParentCategoryId = null },
                new CategoryDto() { Id = 4, Name = "Test 4", ParentCategoryId = 1 },
                new CategoryDto() { Id = 5, Name = "Test 5", ParentCategoryId = 1 },
                new CategoryDto() { Id = 6, Name = "Test 6", ParentCategoryId = 2 },
            };

            return Ok(model);
        }
    }
}
