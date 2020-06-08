using FluentMigrator;
using Migrations.Extensions;

namespace Migrations.App
{
    [MigrationStamp("6/8/2020 2:15PM")]
    public class _002_AddcitationCategories : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Categories")
                .WithIdColumn()
                .WithColumn("Name").AsString(255).NotNullable()
                .WithColumn("ParentCategoryId").AsInt32().ForeignKey("Categories", "Id").Nullable()
                .WithColumn("AspNetUserId").AsString(450).ForeignKey("AspNetUsers", "Id").NotNullable()
                .WithCommon();

            Alter.Table("Citations").AddColumn("CategoryId").AsInt32().ForeignKey("Categories", "Id").NotNullable();
        }
    }
}
