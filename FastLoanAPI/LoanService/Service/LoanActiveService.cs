using LoanService.ExceptionHandling;
using LoanService.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LoanService.Service
{
    public class LoanActiveService
    {
        private readonly IMongoCollection<Loan> _Loan;
        public LoanActiveService(IOptions<LoanDatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _Loan = database.GetCollection<Loan>(settings.Value.LoanCollectionName);

        }
        public Loan CreateLoan(Loan loan)
        {


            Loan isLoanOfferByIdexits = _Loan.Find(n => n.LoanId == loan.LoanId).FirstOrDefault();
            if (isLoanOfferByIdexits == null)
            {

                _Loan.InsertOne(loan);
                return loan;
            }
            else
            {
                throw new LoanNotFoundException($"Loan with id: {loan.LoanId} Already exists");
            }
        }
        public List<Loan> GetLoans()
        {
            return _Loan.Find(_ => true).ToList();
        }
        public Loan GetLoanById(string id)
        {
            Loan isLoanOfferByIdexits = _Loan.Find(n => n.LoanId == id).FirstOrDefault();
            if (isLoanOfferByIdexits != null)
            {
                return isLoanOfferByIdexits;
            }
           else
            {
                throw new LoanNotFoundException($"Loan with id: {id} does not exists");
            }
        }
        public bool DeleteLoanById(string id)
        {
            Loan isExits = GetLoanById(id);
            if (isExits != null)
            {

                _Loan.DeleteOne(r => r.LoanId == id);
                return true;
            }
            else
            {
                throw new LoanNotFoundException($"Loan with id: {id} does not exists");
            }
        }
        public List<Loan> GetByLenderId(string Id)
        {
            List<Loan> isexits = new List<Loan>();
            foreach (Loan loan in _Loan.AsQueryable())
            {
                if (loan.LenderId == Id)
                {
                    isexits.Add(loan);
                }

            }
            if (isexits != null)
            {
                return isexits;
            }
            else
            {
                throw new LoanRequestNotFoundException($"LoanRequest with id: {Id} does not exists");
            }
        }

        public List<Loan> GetByBorrowerId(string Id)
        {
            List<Loan> isexits = new List<Loan>();
            foreach (Loan loan in _Loan.AsQueryable())
            {
                if (loan.BorrowerId == Id)
                {
                    isexits.Add(loan);
                }

            }
            if (isexits != null)
            {
                return isexits;
            }
            else
            {
                throw new LoanRequestNotFoundException($"LoanRequest with id: {Id} does not exists");
            }
        }
    }
}
