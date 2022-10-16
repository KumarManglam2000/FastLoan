using LoanService.ExceptionHandling;
using LoanService.Models;
using LoanService.Service;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
namespace LoanService.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LoanOfferController : ControllerBase
    {
        private readonly LoanOfferService _loanOfferService;
        public LoanOfferController(LoanOfferService loanOfferService)
        {
            _loanOfferService = loanOfferService;
        }
        [HttpPost]
        [Route("")]
        public ActionResult LoanOfferCreate(LoanOffer loanoffer)
        {
           
            try
            {
                LoanOffer _loanoffer = _loanOfferService.CreateLoanOfferService(loanoffer);
                return Created("api/loanoffer/created", _loanoffer);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpGet]
        public ActionResult<List<LoanOffer>> GetAllLoanOfferings()
        {
           
           
                List<LoanOffer> _loanofferings = _loanOfferService.GetLoanOfferings();
                return Ok(_loanofferings);
            
            
        }
        [HttpGet]
        [Route("{Id}")]
        public ActionResult GetLoanOfferById(string Id)
        {

           
            try
            {
                LoanOffer loanOffer = _loanOfferService.GetLoanOfferById(Id);
                if (loanOffer == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(loanOffer);
                }
            }
            catch (LoanOfferNotFoundException u)
            {
                return NotFound(u.Message);
            }

        }
        [HttpPut]
        [Route("{Id}")]
        public ActionResult UpdateLoanOfferById(string Id, LoanOffer loanOffer)
        {
           
            try
            {
                LoanOffer _loanOffer = _loanOfferService.UpdateLoanOfferById(Id, loanOffer);
                return Ok(_loanOffer);

            }
            catch (LoanOfferNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
        [HttpDelete]
        [Route("{Id}")]
        public ActionResult DeleteLoanOfferById(string Id)
        {
            
            try
            {
               
                var Request = _loanOfferService.GetLoanOfferById(Id);
                if (Request == null)
                {
                    return NotFound();
                }
                else
                {
                    bool isdeletesuccess = _loanOfferService.DeleteLoanOfferById(Id);
                    return Ok(isdeletesuccess);
                }

            }
            catch (LoanOfferNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }
        [HttpGet]
        [Route("/api/LoanOffer/LenderId/{lenderId}")]
        public ActionResult GetbyLenderid(string lenderId)
        {

            try
            {
                List<LoanOffer> request = _loanOfferService.GetByLenderId(lenderId);
                return Ok(request);
            }
            catch (LoanRequestNotFoundException u)
            {
                return NotFound(u.Message);
            }
        }


    }
}
