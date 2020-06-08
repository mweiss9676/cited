using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Dtos
{
    public class CategoryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string AspNetUserId { get; set; }

        public int? ParentCategoryId { get; set; }

        public List<CitationDto> Citations { get; set; } = new List<CitationDto>();
    }
}
