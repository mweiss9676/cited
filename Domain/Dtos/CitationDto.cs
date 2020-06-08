using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Dtos
{
    public class CitationDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public string Url { get; set; }
    }
}
