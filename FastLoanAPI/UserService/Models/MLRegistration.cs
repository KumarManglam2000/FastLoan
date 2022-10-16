using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace UserService.Models
{
    public class MLRegistration
    {
       [BsonId]
        public string? Email { get; set; }

        //[BsonElement("UserDetails")]
        public string? Name { get; set; }
        public string? PAN { get; set; }
        public double MobileNo { get; set; }
        public string? Password { get; set; }
    }
}
