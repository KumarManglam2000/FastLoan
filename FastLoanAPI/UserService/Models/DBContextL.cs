using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using NuGet.Protocol.Plugins;


namespace UserService.Models
{
    public class DBContextL
    {
        public DBContextL(IOptions<MLDatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            Users = database.GetCollection<MLRegistration>(settings.Value.CollectionName);

        }
        //private readonly MongoClient _client;
        //private readonly IMongoDatabase _database;
        //public DBContextL(IConfiguration configuration)
        //{


        //    _client = new MongoClient(configuration.GetValue<string>("MongoDBML:ConnectionString"));
        //    _database = _client.GetDatabase(configuration.GetValue<string>("MongoDBML:DatabaseName"));
        //    Users = _database.GetCollection<MLRegistration>("MLRegistration");
        //}


        public IMongoCollection<MLRegistration> Users { get; }
    }
}
