using APIGateway.AuthenticationService.Repository;
using AuthenticationService.Consumer;
using AuthenticationService.Models;
using AuthenticationService.Services;
using Confluent.Kafka;
using Microsoft.EntityFrameworkCore;
using Silverback.Messaging.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll",
        b => b.AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin());

});

// Add services to the container.
builder.Services
            .AddSilverback()
            .WithConnectionToMessageBroker(options => options.AddKafka())
            .AddKafkaEndpoints(
                endpoints => endpoints
                    .Configure(
                        config =>
                        {
                            config.BootstrapServers = "localhost:9092";
                        })
                .AddInbound(
                    endpoint => endpoint
                        .ConsumeFrom("test6")
                        .DeserializeJson(serializer => serializer.UseFixedType<UserLoginInfo>())
                        .Configure(
                            config =>
                            {
                                config.GroupId = "test_group6";
                                config.AutoOffsetReset = AutoOffsetReset.Earliest;
                            })))

            .AddSingletonSubscriber<KafkaConsumer>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IMLRepository, MLRepository>();
builder.Services.AddScoped<ITokenGeneratorService, TokenGeneratorService>();
builder.Services.AddDbContext<AuthDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("localSQLConnectivity")));


var app = builder.Build();

// Configure the HTTP request pipeline.
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
