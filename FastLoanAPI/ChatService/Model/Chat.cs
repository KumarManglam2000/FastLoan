using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChatService.Model
{
    public class Chat
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string? Id { get; set; }
        public string? LenderId { get; set; }
        public string? BorrowerId { get; set; }

        public string[]? Message { get; set; }


    }
}
