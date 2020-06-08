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
            var categories = _categoryService.GetAllForUser(aspNetUserId);
            var model = _mapper.Map<List<CategoryDto>>(categories);

            return Ok(model);
        }
    }
}
