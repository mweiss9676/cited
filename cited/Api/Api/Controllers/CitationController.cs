using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CitationController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public CitationController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
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

class CitationDto
{
    public int Id { get; set; }

    public string Title { get; set; }

    public string Body { get; set; }

    public string Url { get; set; }
}
