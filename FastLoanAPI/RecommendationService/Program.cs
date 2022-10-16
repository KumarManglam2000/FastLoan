using FastLoan.Repository;
using FastLoan.Service;
using Neo4jClient;
using Serilog;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddCors(options => { options.AddPolicy("AllowAll",b=>b.AllowAnyHeader()
.AllowAnyMethod()
.AllowAnyOrigin()); });

// Add services to the container.
var client = new BoltGraphClient(new Uri("bolt://LocalHost:7687"), "neo4j", "12345678");
client.ConnectAsync();
builder.Services.AddSingleton<IGraphClient>(client);

builder.Services.AddControllers();
var client1 = new BoltGraphClient(new Uri("bolt://localhost:7687"), "neo4j", "12345678");
client1.ConnectAsync();
builder.Services.AddSingleton<IGraphClient>(client1);
builder.Services.AddScoped<ILenderRecommendationService, LenderRecommendationService>();

builder.Services.AddScoped<ILenderRecommendationRepository, LenderRecommendationRepository>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
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

app.UseHttpsRedirection();
app.UseCors("default");
app.UseAuthorization();

app.MapControllers();

app.Run();
