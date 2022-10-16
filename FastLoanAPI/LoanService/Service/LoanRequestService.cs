using LoanService.ExceptionHandling;
using LoanService.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LoanService.Service
{
    public class LoanRequestService 
    {
        private readonly IMongoCollection<LoanRequest> _LoanRequests;
        public LoanRequestService(IOptions<LoanRequestDatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _LoanRequests = database.GetCollection<LoanRequest>(settings.Value.LoanCollectionName);

        }

       

        public LoanRequest CreateRequest(LoanRequest loanRequest)
        {
            LoanRequest isexits = _LoanRequests.Find(r => r.LoanRequestId == loanRequest.LoanRequestId).FirstOrDefault();
            if (isexits == null)
            {

                _LoanRequests.InsertOne(loanRequest);
                return loanRequest;
            }
            else
            {
                throw new LoanRequestNotFoundException($"LoanRequest with id: {loanRequest.LoanRequestId} Already exists");
            }
           
        }
        public List<LoanRequest> GetAllrequests()
        {
            return _LoanRequests.Find(_ => true).ToList();
        }
        public bool DeleteRequest(string Id)
        {

           
            LoanRequest isExits = GetById(Id);
            if (isExits != null)
            {

                _LoanRequests.DeleteOne(r => r.LoanRequestId == Id);
                return true;
            }
            else
            {
                throw new LoanRequestNotFoundException($"LoanRequest with id: {Id} does not exists");
            }
        }
        public LoanRequest GetById(string Id)
        {
           LoanRequest isexits= _LoanRequests.Find(r => r.LoanRequestId == Id).FirstOrDefault();
            if(isexits != null)
            {
                return isexits;
            }
            else
            {
                throw new LoanRequestNotFoundException($"LoanRequest with id: {Id} does not exists");
            }

        }
        public List<LoanRequest> GetByLenderId(string Id)
        {
            List<LoanRequest> isexits = new List<LoanRequest>();
            foreach (LoanRequest loanRequest in _LoanRequests.AsQueryable())
            {
                  if(loanRequest.LenderId == Id)
                {
                    isexits.Add(loanRequest);
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
        public LoanRequest UpdatebyId(string Id,LoanRequest loanrequest)
        {
            
            LoanRequest isExits = GetById(Id);
            if (isExits != null)
            {

                _LoanRequests.ReplaceOne(loanrequest => loanrequest.LoanRequestId == Id, loanrequest);
                return loanrequest;
            }
            else
            {
                throw new LoanRequestNotFoundException($"LoanRequest with id: {Id} does not exists");
            }

        }

    }
}
