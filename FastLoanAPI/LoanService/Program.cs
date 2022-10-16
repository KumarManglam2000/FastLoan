using LoanService.Models;
using LoanService.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.Configure<LoanDatabaseSettings>(builder.Configuration.GetSection("LoanDatabaseSettings"));
builder.Services.Configure<LoanOfferDatabaseSettings>(builder.Configuration.GetSection("LoanOfferDatabaseSettings"));

builder.Services.Configure<LoanRequestDatabaseSettings>(builder.Configuration.GetSection("LoanRequestDatabaseSettings"));

builder.Services.AddSingleton<LoanRequestService>();
builder.Services.AddSingleton<LoanOfferService>();
builder.Services.AddSingleton<LoanActiveService>();

builder.Services.AddControllers();
builder.Services.AddMvc();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddCors();
builder.Services.AddCors((setup) =>
{
    setup.AddPolicy("default", (options) =>
    {
        options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("default");
//app.UseCors(options =>
//            options.WithOrigins("http://localhost:4200")
//            .AllowAnyMethod()
//            .AllowAnyHeader());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
