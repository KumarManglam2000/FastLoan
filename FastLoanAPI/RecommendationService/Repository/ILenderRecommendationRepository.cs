using FastLoan.Models;
using RecommendationService.Models;

namespace FastLoan.Repository
{
    public interface ILenderRecommendationRepository
    {
        Task<IEnumerable<Loanoffer>> RecommendationByLoanoffer(string lid);
        Task<IEnumerable<Lender>> RecommendationByBorrower(string bid);
        

    }
}