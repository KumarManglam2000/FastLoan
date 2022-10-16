namespace LoanService.Models
{
    public class LoanRequestDatabaseSettings
    {
        public string LoanCollectionName { get; set; } = null!;
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
    }
}
