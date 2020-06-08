using Microsoft.Extensions.DependencyInjection;
using System;
using Microsoft.AspNetCore.Hosting;
using Domain.Configuration;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using Domain.Interfaces;
using Domain.Services;

namespace Domain.Startup
{
    public static class StartupExtensions
    {
        public static IServiceCollection ConfigureDependencies(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddHttpContextAccessor();

            services.ConfigureEntityFramework();

            services.Configure<ApiSection>(configuration.GetSection("Api"));

            services.AddScoped<ICitationService, CitationService>();
            services.AddScoped<ICategoryService, CategoryService>();

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return services;
        }

        public static void ConfigureEntityFramework(this IServiceCollection services, ServiceLifetime lifetime = ServiceLifetime.Scoped)
        {
            services
                .AddDbContext<CitedContext>(options => options
                    .EnableDetailedErrors()
                    .EnableSensitiveDataLogging()
                    .UseLazyLoadingProxies()
                , lifetime);
        }

    }
}
