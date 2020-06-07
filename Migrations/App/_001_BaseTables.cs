using FluentMigrator;
using Migrations.Extensions;

namespace Migrations.App
{
    [MigrationStamp("6/7/2020 12:15PM")]
    public class _001_BaseTables : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Citations")
                .WithIdColumn()
                .WithColumn("Body").AsString(int.MaxValue).NotNullable()
                .WithColumn("Url").AsString().Nullable()
                .WithColumn("IsPublic").AsBoolean().NotNullable()
                .WithColumn("AspNetUserId").AsString(450).ForeignKey("AspNetUsers", "Id").NotNullable()
                .WithCommon();
        }
    }
}
