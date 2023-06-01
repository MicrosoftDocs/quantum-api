---
uid: Microsoft.Quantum.ResourceEstimation
title: Microsoft.Quantum.ResourceEstimation namespace
ms.date: 6/1/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.ResourceEstimation
qsharp.summary: ''
---

# Microsoft.Quantum.ResourceEstimation namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AccountForEstimates](xref:Microsoft.Quantum.ResourceEstimation.AccountForEstimates) |Account for the resource estimates of an unimplemented operation, which were obtainted separately. This operation is only available when using resource estimator execution target. |

## Functions

| Name | Summary |
|------|---------|
|[AuxQubitCount](xref:Microsoft.Quantum.ResourceEstimation.AuxQubitCount) |Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of auxilliary qubits is equal to the `amount`. |
|[BeginEstimateCaching](xref:Microsoft.Quantum.ResourceEstimation.BeginEstimateCaching) |Informs the resource estimator of the start of the code fragment for which estimates caching can be done. This function is only available when using resource estimator execution target. |
|[CczCount](xref:Microsoft.Quantum.ResourceEstimation.CczCount) |Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of the CCZ gates is equal to the `amount`. |
|[EndEstimateCaching](xref:Microsoft.Quantum.ResourceEstimation.EndEstimateCaching) |Instructs the resource estimator to stop estimates caching because the code fragment in consideration is over. This function is only available when using resource estimator execution target. |
|[MeasurementCount](xref:Microsoft.Quantum.ResourceEstimation.MeasurementCount) |Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number Measurements is equal to the `amount`. |
|[PSSPCLayout](xref:Microsoft.Quantum.ResourceEstimation.PSSPCLayout) |Pass the value returned by the function to the `AccountForEstimates` operation to indicate Parallel Synthesis Sequential Pauli Computation (PSSPC) layout. See https://arxiv.org/pdf/2211.07629.pdf for details. |
|[RotationCount](xref:Microsoft.Quantum.ResourceEstimation.RotationCount) |Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of rotations is equal to the `amount`. |
|[RotationDepth](xref:Microsoft.Quantum.ResourceEstimation.RotationDepth) |Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the rotation depth is equal to the `amount`. |
|[SingleVariant](xref:Microsoft.Quantum.ResourceEstimation.SingleVariant) |Used to specify that there's only one execution variant in `BeginEstimateCaching` function |
|[TCount](xref:Microsoft.Quantum.ResourceEstimation.TCount) |Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of the T gates is equal to the `amount`. |

<!-- /summaries -->
