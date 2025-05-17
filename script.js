document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.surprise-button');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    const showLoading = () => {
        loadingSpinner.classList.add('active');
        loadingOverlay.classList.add('active');
    };
    
    const hideLoading = () => {
        loadingSpinner.classList.remove('active');
        loadingOverlay.classList.remove('active');
    };
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = button.closest('.step');
            const nextStepId = button.getAttribute('data-next');
            const nextStep = document.getElementById(nextStepId);
            
            // Show loading state
            showLoading();
            
            // Hide current step
            currentStep.classList.remove('active');
            
            // Simulate loading time (you can adjust this value)
            setTimeout(() => {
                // Show next step
                nextStep.classList.add('active');
                
                // Hide loading state
                hideLoading();
            }, 1000); // 1 second loading time
        });
    });
}); 