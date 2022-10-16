using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LoanService.Models
{
    public class LoanRequest
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? LoanRequestId { get; set; }
        public string? BorrowerId { get; set; }
        //public string? LoanType { get; set; }
        //public int LoanAmount { get; set; }
        //public int RateofInterest { get; set; }
        //public int LoanOfferId { get; set; }
        //public string CreatedBy { get; set; }
        //public DateTime CreatedOn { get; set; }=DateTime.Now;
        //public string? LoanRequestId { get; set; }
         public string? LenderId { get; set; }
        public string? SourceOfPay { get; set; }
        // public int LoanAmount { get; set; }
        // public int RateofInterest { get; set; }
        public string? LoanOfferId { get; set; }
        public string? BorrowerName { get; set; }
        public string? Date { get; set; }
        public string? NumberOfMonths { get; set; }
    }
}
