using LoanService.ExceptionHandling;
using LoanService.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LoanService.Service
{
    public class LoanOfferService
    {
        readonly IMongoCollection<LoanOffer> _loans;
        public LoanOfferService(IOptions<LoanOfferDatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _loans = database.GetCollection<LoanOffer>(settings.Value.LoanCollectionName);

        }
        public LoanOffer CreateLoanOfferService(LoanOffer loanOffer)
        {

            LoanOffer isLoanOfferByIdexits = _loans.Find(n => n.LoanOfferId == loanOffer.LoanOfferId).FirstOrDefault();
            if (isLoanOfferByIdexits == null)
            {

                _loans.InsertOne(loanOffer);
                return loanOffer;
            }
            else
            {
                throw new LoanOfferNotFoundException($"LoanOffer with id: {loanOffer.LoanOfferId} Already exists");
            }
        }
        public List<LoanOffer> GetLoanOfferings()
        {
           return _loans.Find(_ => true).ToList();
           
        }
        public LoanOffer GetLoanOfferById(string id)
        {
            LoanOffer isLoanOfferByIdexits = _loans.Find(n => n.LoanOfferId == id).FirstOrDefault();
            if (isLoanOfferByIdexits != null)
            {
                return isLoanOfferByIdexits;
            }
            else
            {
                throw  new LoanOfferNotFoundException($"LoanOffer with id: {id} does not exists");
            }
        }
        public LoanOffer UpdateLoanOfferById(string id, LoanOffer loanOffer)
        {
            
            LoanOffer isExits = GetLoanOfferById(id);
            if (isExits != null)
            {

                _loans.ReplaceOne(loanOffer => loanOffer.LoanOfferId == id, loanOffer);
                return loanOffer;
            }
            else
            {
                throw new LoanOfferNotFoundException($"LoanOffer with id: {id} does not exists");
            }
        }
        public bool DeleteLoanOfferById(string id)
        {
            LoanOffer isExits = GetLoanOfferById(id);
            if (isExits != null)
            {

                _loans.DeleteOne(r => r.LoanOfferId == id);
                return true;
            }
            else
            {
                throw new LoanOfferNotFoundException($"LoanOffer with id: {id} does not exists");
            }
        }

        public List<LoanOffer> GetByLenderId(string Id)
        {
            List<LoanOffer> isexits = new List<LoanOffer>();
            foreach (LoanOffer loan in _loans.AsQueryable())
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
    }
}
