using AutoMapper;
using Domain.Dtos;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Mapper
{
    public class CitationMapperProfile : Profile
    {
        public CitationMapperProfile()
        {
            CreateMap<CitationDto, Citation>().ReverseMap();
        }
    }
}
