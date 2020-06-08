using System.Collections.Generic;
using AutoMapper;
using Domain.Dtos;
using Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CitationController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICitationService _citationService;

        public CitationController(ICitationService citationService, IMapper mapper)
        {
            _mapper = mapper;
            _citationService = citationService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var citations = new List<CitationDto>()
            {
                new CitationDto() 
                {
                    Id = 1,
                    Title = "Testing",
                    Body = "This is the value. Here we have some data.",
                    Url = "https://www.google.com"
                },
                new CitationDto()
                {
                    Id = 2,
                    Title = "Testing 2",
                    Body = "This is the value. Here we have some data.",
                    Url = "https://www.google.com"
                },
                new CitationDto()
                {
                    Id = 3,
                    Title = "Testing 3",
                    Body = "This is the value. Here we have some data.",
                    Url = "https://www.google.com"
                },
                new CitationDto()
                {
                    Id = 4,
                    Title = "Testing 4",
                    Body = "This is the value. Here we have some data.",
                    Url = "https://www.google.com"
                },
                new CitationDto()
                {
                    Id = 5,
                    Title = "Testing 5",
                    Body = "This is the value. Here we have some data.",
                    Url = "https://www.google.com"
                },

            };

            return Ok(citations);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var citationDto = new CitationDto()
            {
                Id = id,
                Title = "Testing",
                Body = "This is the value. Here we have some data.",
                Url = "https://www.google.com"
            };

            return Ok(citationDto);
        }
    }
}
