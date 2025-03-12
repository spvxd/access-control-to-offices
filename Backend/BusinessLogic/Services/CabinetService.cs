using DataAccess;
using DataAccess.Models;
using DataAccess.Repositories;

namespace BusinessLogic.Services;

public class CabinetService : ICabinetService
{
    private readonly ICabinetRepository _cabinetRepository;

    public CabinetService(ICabinetRepository cabinetRepository)
    {
        _cabinetRepository = cabinetRepository;
    }

    public async Task CreateNewCabinetAsync(string number)
    {
        await _cabinetRepository.CreateNewCabinetAsync(number);
    }

    public async Task<List<Cabinet>> GetAllCabinetsAsync()
    {
        return await _cabinetRepository.GetAllCabinetsAsync();
    }

    public async Task<List<Cabinet>> GetUserCabinetsAsync(int id)
    {
        return await _cabinetRepository.GetUserCabinetsAsync(id);
    }

    public async Task<bool> AssignCabinetsAsync(int UserId, List<string> CabinetNumbers)
    {
        var user = await _cabinetRepository.GetUserWithCabinetsAsync(UserId);
        if (user == null)
            return false;

        var currentCabinets = user.UserCabinets.Select(uc => uc.Cabinet.Number).ToList();
        var newCabinets = CabinetNumbers.Except(currentCabinets).ToList();
        var removeCabinets = currentCabinets.Except(CabinetNumbers).ToList();

        if (!newCabinets.Any() && !removeCabinets.Any())
            return true; 

        var cabinetsToAdd = await _cabinetRepository.GetCabinetsByNumbersAsync(newCabinets);
        var cabinetsToRemove = user.UserCabinets.Where(uc => removeCabinets.Contains(uc.Cabinet.Number)).ToList();

        foreach (var cabinet in cabinetsToRemove)
        {
            user.UserCabinets.Remove(cabinet);
        }

        foreach (var cabinet in cabinetsToAdd)
        {
            user.UserCabinets.Add(new UserCabinet
            {
                UserId = user.Id,
                CabinetId = cabinet.Id
            });
        }
        await _cabinetRepository.SaveChangesAsync();
        return true;
    }
}