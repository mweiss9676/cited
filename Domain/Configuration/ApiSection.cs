using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Configuration
{
    public class ApiSection
    {
        public bool Demo { get; set; }

        public string BaseUrl { get; set; }

        public string ClientUri { get; set; }

        public ICollection<string> AllowedCorsOrigins { get; set; }
    }
}
