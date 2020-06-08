using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using Domain.Configuration;
using Microsoft.Extensions.Configuration;
using AutoMapper;

namespace Domain.Startup
{
    public static class StartupExtensions
    {
        public static IServiceCollection ConfigureDependencies(this IServiceCollection services, IWebHostEnvironment environment, IConfiguration configuration)
        {
            services.ConfigureDependencies(environment, configuration);

            services.Configure<ApiSection>(configuration.GetSection("Api"));

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return services;

        }
    }
}
