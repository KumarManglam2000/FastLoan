using FastLoan.Models;
using RecommendationService.Models;

namespace FastLoan.Service
{
    public interface ILenderRecommendationService
    {
       Task<IEnumerable<Loanoffer>> RecommendationByLoanoffer(string lid);
        Task<IEnumerable<Lender>> RecommendationByBorrower(string bid);
       


    }
}
