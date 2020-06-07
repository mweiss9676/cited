REM dotnet tool install -g FluentMigrator.DotNet.Cli
REM dotnet tool update -g FluentMigrator.DotNet.Cli

dotnet build Migrations/Migrations.csproj
dotnet fm migrate -p sqlserver -c "Server=DESKTOP-DG9H8KF\SQLEXPRESS;Database=Cited;User Id=sa;Password=Strike$Mezcal2;Connection Timeout=60;" -a Migrations\bin\Debug\netcoreapp3.0\Migrations.dll -n Migrations.App

@pause
