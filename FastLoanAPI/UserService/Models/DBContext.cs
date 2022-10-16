using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using NuGet.Protocol.Plugins;


namespace UserService.Models
{
    public class DBContext
    {
        public DBContext(IOptions<MBDatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            Users = database.GetCollection<MBRegistration>(settings.Value.CollectionName);

        }
        //private readonly MongoClient _client;
        //private readonly IMongoDatabase _database;
        //public DBContext(IConfiguration configuration)
        //{
            

        //    _client = new MongoClient(configuration.GetValue<string>("MongoDB:ConnectionString"));
        //    _database = _client.GetDatabase(configuration.GetValue<string>("MongoDB:DatabaseName"));
        //    Users = _database.GetCollection<MBRegistration> (configuration.GetValue<string>("MongoDB:CollectionName"));
        //}


        public IMongoCollection<MBRegistration> Users { get; }
    }
}
