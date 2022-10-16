using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LoanService.Models
{
    public class LoanOffer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? LoanOfferId { get; set; }
        public string? LoanType { get; set; }
        public string? LoanAmount { get; set; }
        public string? TimePeriod { get; set; }
        public string? RateOfInterest { get; set; }
        public string? CreatedDate { get; set; }
        public string? LenderName { get; set; }
        public string? LenderId { get; set; }


    }
}
