#include <stdio.h>

int runningTime(int arr[], int n) {
    int shifts = 0;

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
            shifts++;
        }
        arr[j + 1] = key;
    }

    return shifts;
}

int main() {
    int n;
    scanf("%d", &n);

    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int shifts = runningTime(arr, n);
    printf("%d\n", shifts);

    return 0;
}
