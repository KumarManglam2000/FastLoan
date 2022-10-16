using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LoanService.Models
{
    public class Loan
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? LoanId { get; set; }
        public string? LoanRequestId { get; set; }
        public string? BorrowerId { get; set; }
       
        public string? LenderId { get; set; }
        public string? SourceOfPay { get; set; }
       
        public string? BorrowerName { get; set; }
        public string? Date { get; set; }
        public string? NumberOfMonths { get; set; }

        public string? LoanOfferId { get; set; }
        public string? LoanType { get; set; }
        public string? LoanAmount { get; set; }
        public string? TimePeriod { get; set; }
        public string? RateOfInterest { get; set; }
        public string? CreatedDate { get; set; }
        public string? LenderName { get; set; }
    
    }
}
