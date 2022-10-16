using UserService.Models;
using UserService.Repository;
using UserService.Service;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll",
        b => b.AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin());

});

builder.Services.Configure<MBDatabaseSettings>(builder.Configuration.GetSection("MongoDB"));
builder.Services.Configure<MLDatabaseSettings>(builder.Configuration.GetSection("MongoDBML"));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IMBService,MBService>();
builder.Services.AddScoped<IMLService, MLService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserRepositoryL, UserRepositoryL>();
builder.Services.AddScoped<DBContext>();
builder.Services.AddScoped<DBContextL>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
