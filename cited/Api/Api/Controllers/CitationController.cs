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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var thing = new Thing()
            {
                Id = id,
                Whatever = "Testing"
            };

            return Ok(thing);
        }
    }
}

class Thing
{
    public int Id { get; set; }

    public string Whatever { get; set; }
}
