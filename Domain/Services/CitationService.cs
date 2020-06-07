using System;
using System.Collections.Generic;
using System.Text;
using Domain.Interfaces;
using Domain.Models;

namespace Domain.Services
{
    public class CitationService : AppService<Citation>, ICitationService
    {
        public CitationService(CitedContext ctx) : base(ctx)
        {

        }
    }
}
