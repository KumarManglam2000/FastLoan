
using FastLoan.Models;
using FastLoan.Repository;
using RecommendationService.Exceptions;
using RecommendationService.Models;

namespace FastLoan.Service
{
    public class LenderRecommendationService : ILenderRecommendationService
    {
        private readonly ILenderRecommendationRepository _borrowerRecommendationRepository;
        public LenderRecommendationService(ILenderRecommendationRepository borrowerRecommendationRepository)
        {
            _borrowerRecommendationRepository = borrowerRecommendationRepository;
        }
        public async Task<IEnumerable<Lender>> RecommendationByBorrower(string bid )
        {
            var lenderbyborrower = await _borrowerRecommendationRepository.RecommendationByBorrower(bid);
            if (lenderbyborrower.Any())
       
            {
               return lenderbyborrower.ToList();
            }
           else
            {
                throw new NoBorrowerInThisLenderException($"No Borrower In This Lender {bid}");
            }
        }
        public async Task<IEnumerable<Loanoffer>> RecommendationByLoanoffer(string lid)
        {
            var lenderbyloanoffer = await _borrowerRecommendationRepository.RecommendationByLoanoffer(lid);
            if (lenderbyloanoffer.Any())

            {
                return lenderbyloanoffer.ToList();
            }
            else
            {
                throw new NoLoanofferInThisLenderException($"No lender In This Loanoffer {lid}");
            }
        }

    }
}
