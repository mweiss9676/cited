using FluentMigrator;
using FluentMigrator.Builders.Alter.Table;
using FluentMigrator.Builders.Create.Column;
using FluentMigrator.Builders.Create.ForeignKey;
using FluentMigrator.Builders.Create.Table;
using FluentMigrator.Builders.Delete.ForeignKey;
using System;
using System.Collections.Generic;
using System.Text;

namespace Migrations.Extensions
{
    public static class MigrationExtensions
    {
        public static ICreateTableColumnOptionOrWithColumnSyntax WithIdColumn(this ICreateTableWithColumnSyntax tableWithColumnSyntax)
        {
            return tableWithColumnSyntax
                .WithColumn("Id").AsInt32().NotNullable().PrimaryKey().Identity();
        }

        public static ICreateTableColumnOptionOrWithColumnSyntax WithCommon(this ICreateTableWithColumnSyntax tableWithColumnSyntax)
        {
            return tableWithColumnSyntax
                .WithColumn("CreatedDate").AsDateTimeOffset().NotNullable().WithDefaultValue(SystemMethods.CurrentUTCDateTime)
                .WithColumn("CreatedBy").AsString(255).Nullable().WithDefaultValue("System")
                .WithColumn("UpdatedDate").AsDateTimeOffset().Nullable().WithDefaultValue(SystemMethods.CurrentUTCDateTime)
                .WithColumn("UpdatedBy").AsString(255).Nullable().WithDefaultValue("System")
                .WithColumn("IsDeleted").AsBoolean().WithDefaultValue(false);
        }

        public static ICreateForeignKeyCascadeSyntax FromTo(this ICreateForeignKeyFromTableSyntax syn, string table, string column)
        {
            var toTable = Column_to_table(column);

            return syn.FromTable(table).InSchema("dbo").ForeignColumn(column).ToTable(toTable).InSchema("dbo").PrimaryColumn("Id");
        }

        private static string Column_to_table(string many)
        {
            return many.Split('_')[0].ToLower() + "s";
        }

        public static void FromTo(this IDeleteForeignKeyFromTableSyntax syn, string tableName, string column)
        {
            syn.FromTable(tableName).ForeignColumn(column).ToTable(Column_to_table(column)).PrimaryColumn("Id");
        }

        public static ICreateColumnOptionSyntax AsDateTimeOffsetCustom(
            this ICreateColumnAsTypeOrInSchemaSyntax obj, MigrationBase migration)
        {
            if (migration.ConnectionString.Contains("memory:"))
            {
                return obj.AsDateTime();
            }

            return obj.AsDateTimeOffset();
        }

        public static IAlterTableColumnOptionOrAddColumnOrAlterColumnSyntax AsDateTimeOffsetCustom(
            this IAlterTableColumnAsTypeSyntax obj, MigrationBase migration)
        {
            if (migration.ConnectionString.Contains("memory:"))
            {
                return obj.AsDateTime();
            }

            return obj.AsDateTimeOffset();
        }

        public static ICreateTableColumnOptionOrWithColumnSyntax AsDateTimeOffsetCustom(
            this ICreateTableColumnAsTypeSyntax obj, MigrationBase migration, bool isTesting = false)
        {
            if (isTesting || (migration != null && migration.ConnectionString.Contains("memory:")))
            {
                return obj.AsDateTime();
            }

            return obj.AsDateTimeOffset();
        }
    }
}
