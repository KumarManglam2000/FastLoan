using ChatService.Model;
using ChatService.Services;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Net.WebSockets;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.


builder.Services.Configure<ChatDatabaseSetting>(builder.Configuration.GetSection("ChatDatabaseSetting"));
builder.Services.AddSingleton<ChatServices>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseWebSockets();

var webSocketOptions = new WebSocketOptions
{
    KeepAliveInterval = TimeSpan.FromMinutes(2)
};

app.UseWebSockets(webSocketOptions);

List<WebSocket> _connections = new();

app.Use(async (context, next) =>
{
    if (context.Request.Path == "/chat")
    {
        if (context.WebSockets.IsWebSocketRequest)
        {
            using var webSocket = await context.WebSockets.AcceptWebSocketAsync();
            _connections.Add(webSocket);

            await Echo(context, webSocket);


        }
        else
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
        }
    }
    else
    {
        await next(context);
    }
    
});

async Task Echo(HttpContext context, WebSocket webSocket)
{
    var buffer = new byte[1024 * 4];
    WebSocketReceiveResult wsresult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer),
    CancellationToken.None);
    while (!wsresult.CloseStatus.HasValue)
    {
        foreach (var c in _connections)
        {
            await c.SendAsync(new ArraySegment<byte>(buffer, 0, wsresult.Count), wsresult.MessageType,
        wsresult.EndOfMessage, CancellationToken.None);
        }
        wsresult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
    }
    await webSocket.CloseAsync(wsresult.CloseStatus.Value, wsresult.CloseStatusDescription,
    CancellationToken.None);
}


/*static async Task Echo(WebSocket webSocket)
{
    var buffer = new byte[1024 * 4];
    var receiveResult = await webSocket.ReceiveAsync(
        new ArraySegment<byte>(buffer), CancellationToken.None);
​
    while (!receiveResult.CloseStatus.HasValue)
    {
        Console.WriteLine(receiveResult);
        await webSocket.SendAsync(
            new ArraySegment<byte>(buffer, 0, receiveResult.Count),
            receiveResult.MessageType,
            receiveResult.EndOfMessage,
            CancellationToken.None);
​
        receiveResult = await webSocket.ReceiveAsync(
            new ArraySegment<byte>(buffer), CancellationToken.None);
    }
​
    await webSocket.CloseAsync(
        receiveResult.CloseStatus.Value,
        receiveResult.CloseStatusDescription,
        CancellationToken.None);
}*/

app.Run();
