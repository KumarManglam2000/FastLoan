namespace LoanService.Models
{
    public class LoanDatabaseSettings 
    {
        public string LoanCollectionName { get; set; } = null!;
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
    }
    //public interface ILoanDatabaseSettings
    //{
    //    public string LoanCollectionName { get; set; }
    //    public string ConnectionString { get; set; }
    //    public string DatabaseName { get; set; }
    //}
}
