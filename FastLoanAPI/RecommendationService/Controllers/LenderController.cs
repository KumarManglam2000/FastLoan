using FastLoan.Models;
using Microsoft.AspNetCore.Mvc;
using Neo4jClient;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using RecommendationService.Models;

namespace FastLoan.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LenderController : ControllerBase
    {
        private readonly IGraphClient _client;

        public LenderController(IGraphClient client)
        {
            _client = client;
        }
        [HttpPost]
        [Route("/api/borrower")]
        public async Task<IActionResult> CreateBorrower([FromBody] Borrower borrower)
        {
            await _client.Cypher.Create("(b:Borrower $borrower)")
                                .WithParam("borrower", borrower)
                                .ExecuteWithoutResultsAsync();

            return Ok("borrower saved");
        }
        [HttpPost]
        [Route("/api/lender")]
        public async Task<IActionResult> CreateLender([FromBody] Lender lender)
        {
            await _client.Cypher.Create("(l:Lender $lender)")
                                .WithParam("lender", lender)
                                .ExecuteWithoutResultsAsync();

            return Ok("lender saved");
        }
        [HttpPost]
        [Route("/api/recommendation/loanoffer")]
        public async Task<IActionResult> CreateLoanoffer([FromBody] Loanoffer loanoffer)
        {
            await _client.Cypher.Create("(lo:Loanoffer $loanoffer)")
                                .WithParam("loanoffer", loanoffer)
                                .ExecuteWithoutResultsAsync();

            return Ok("loanofferr saved");
        }
        [HttpGet("/api/reltolo/{loid}/{lid}")]
        public async Task<IActionResult> AssignLoanOffer(string loid, string lid)
        {
            await _client.Cypher.Match("(lo:Loanoffer),(l:Lender)")
                .Where(( Loanoffer lo, Lender l) =>  lo.LoanOfferId == loid && l.LenderId == lid )
                .Create("(l)-[r:hasLoanoffer]->(lo)")
                .ExecuteWithoutResultsAsync();

            return Ok("Relation created");
        }


        [HttpGet("/api/reltob/{bid}/{lid}")]
        public async Task<IActionResult> AssignLender(string bid, string lid)
        {
            await _client.Cypher.Match("(b:Borrower ),(l:Lender)")
                .Where((Borrower b, Lender l) => b.BorrowerId == bid && l.LenderId == lid)
                .Create("(l)-[r:hasBorrow]->(b)")
                .ExecuteWithoutResultsAsync();

            return Ok("Relation created");
        }
    }
}
