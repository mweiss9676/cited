using FluentMigrator;
using System;

namespace Migrations.Extensions
{
    public class MigrationStampAttribute : MigrationAttribute
    {
        public MigrationStampAttribute(DateTime dt)
            : base(dt.Ticks)
        {
        }

        public MigrationStampAttribute(int year, int month, int day, int hour, int minute)
            : this(new DateTime(year, month, day, hour, minute, 0, 0))
        {
        }

        public MigrationStampAttribute(string date)
            : this(DateTime.Parse(date))
        {
        }
    }
}
