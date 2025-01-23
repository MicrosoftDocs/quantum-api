---
uid: Qdk.Std.ResourceEstimation-toc
title: Std.ResourceEstimation namespace
description: Table of contents for the Q# ResourceEstimation namespace
author: bradben
ms.author: brbenefield
ms.date: 01/22/2025
ms.topic: landing-page
---

# Std.ResourceEstimation

The Std.ResourceEstimation namespace contains the following items:

| Name | Description |
|------|-------------|
| [AccountForEstimates](xref:Qdk.Std.ResourceEstimation.AccountForEstimates) | Account for the resource estimates of an unimplemented operation, which were obtained separately. This operation is only available when using resource estimator execution target. |
| [AuxQubitCount](xref:Qdk.Std.ResourceEstimation.AuxQubitCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of auxiliary qubits is equal to the `amount`. |
| [BeginEstimateCaching](xref:Qdk.Std.ResourceEstimation.BeginEstimateCaching) | Informs the resource estimator of the start of the code fragment for which estimates caching can be done. This function is only available when using resource estimator execution target. |
| [BeginRepeatEstimates](xref:Qdk.Std.ResourceEstimation.BeginRepeatEstimates) | Instructs the resource estimator to assume that the resources from the call of this operation until a call to `EndRepeatEstimates` are accounted for `count` times, without the need to execute the code that many times. Calls to `BeginRepeatEstimates` and `EndRepeatEstimates` can be nested. A helper operation `RepeatEstimates` allows to call the two functions in a `within` block. |
| [CczCount](xref:Qdk.Std.ResourceEstimation.CczCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of the CCZ gates is equal to the `amount`. |
| [EndEstimateCaching](xref:Qdk.Std.ResourceEstimation.EndEstimateCaching) | Instructs the resource estimator to stop estimates caching because the code fragment in consideration is over. This function is only available when using resource estimator execution target. |
| [EndRepeatEstimates](xref:Qdk.Std.ResourceEstimation.EndRepeatEstimates) | Companion operation to `BeginRepeatEstimates`. |
| [MeasurementCount](xref:Qdk.Std.ResourceEstimation.MeasurementCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number Measurements is equal to the `amount`. |
| [PSSPCLayout](xref:Qdk.Std.ResourceEstimation.PSSPCLayout) | Pass the value returned by the function to the `AccountForEstimates` operation to indicate Parallel Synthesis Sequential Pauli Computation (PSSPC) layout. See https://arxiv.org/pdf/2211.07629.pdf for details. |
| [RepeatEstimates](xref:Qdk.Std.ResourceEstimation.RepeatEstimates) | Instructs the resource estimator to assume that the resources from the call of this operation until a call to `Adjoint RepeatEstimates` are accounted for `count` times, without the need to execute the code that many times. |
| [RotationCount](xref:Qdk.Std.ResourceEstimation.RotationCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of rotations is equal to the `amount`. |
| [RotationDepth](xref:Qdk.Std.ResourceEstimation.RotationDepth) | Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the rotation depth is equal to the `amount`. |
| [SingleVariant](xref:Qdk.Std.ResourceEstimation.SingleVariant) | Used to specify that there's only one execution variant in `BeginEstimateCaching` function |
| [TCount](xref:Qdk.Std.ResourceEstimation.TCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation to specify that the number of the T gates is equal to the `amount`. |
