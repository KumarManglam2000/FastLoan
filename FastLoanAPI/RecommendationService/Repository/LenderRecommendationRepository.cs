using FastLoan.Models;
using Neo4jClient;
using RecommendationService.Models;

namespace FastLoan.Repository
{
    public class LenderRecommendationRepository : ILenderRecommendationRepository
    {
        private readonly IGraphClient _client;
        public LenderRecommendationRepository(IGraphClient client)
        {
            _client = client;
        }
        public async Task<IEnumerable<Lender>> RecommendationByBorrower(string bid)
        {
            var lenderbyborrower = await _client.Cypher.Match("(l: Lender)-[rel:hasBorrow]->(b: Borrower)")
                                                   .Where((Lender l, Borrower b) => b.BorrowerId== bid)
                                                   .Return(l => l.As<Lender>()).ResultsAsync;
            return lenderbyborrower;
        }
        public async Task<IEnumerable<Loanoffer>> RecommendationByLoanoffer(string lid)
        {
            var lenderbyloanoffer = await _client.Cypher.Match("(l: Lender)-[rel:hasLoanoffer]->(lo: Loanoffer)")
                                                   .Where((Lender l, Loanoffer lo) => l.LenderId == lid)
                                                   .Return(lo => lo.As<Loanoffer>()).ResultsAsync;
            return lenderbyloanoffer;
        }
        
    }
}
