
using FastLoan.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Neo4jClient;
using RecommendationService.Exceptions;
using RecommendationService.Models;

namespace FastLoan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LenderRecommendationController : ControllerBase
    {
        private readonly ILenderRecommendationService _recommendationService;
        public LenderRecommendationController(ILenderRecommendationService borrowerRecommendationService)
        {
            _recommendationService = borrowerRecommendationService;
        }
        [HttpGet]
        [Route("{bid}")]
        public async Task<IActionResult> GetByBorrower(string bid)
        {
            try
            {
                var lenderbyborrower = await _recommendationService.RecommendationByBorrower(bid);
                List<Loanoffer> loanofferList = new List<Loanoffer>();   
                foreach(var item in lenderbyborrower)
                {
                    var lender = item.LenderId;
                    var lenderbyloanoffer = await _recommendationService.RecommendationByLoanoffer(lender);
                    Console.WriteLine(lender);
                    loanofferList.AddRange(lenderbyloanoffer);
                
                }
                return Ok(loanofferList);
            }
            catch (NoBorrowerInThisLenderException niex)
            {
                return NotFound(niex.Message);
            }
        }

        //[HttpGet]
        //[Route("loanoffer")]
        //public async Task<IActionResult> GetByLoanoffer(string lid)
        //{
        //    try
        //    {
               
        //        var lenderbyloanoffer = await _recommendationService.RecommendationByLoanoffer(lid);

                
        //        return Ok(lenderbyloanoffer.ToList());
        //    }
        //    catch (NoLoanofferInThisLenderException niex)
        //    {
        //        return NotFound(niex.Message);
        //    }
        //}
       
    }
}
