---
uid: Microsoft.Quantum.MachineLearning._RunSingleTrainingEpoch
title: _RunSingleTrainingEpoch operation
ms.date: 6/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: _RunSingleTrainingEpoch
qsharp.summary: >-
  Perform one epoch of sequential classifier training on a subset of
  data samples.
---

# _RunSingleTrainingEpoch operation

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Perform one epoch of sequential classifier training on a subset ofdata samples.

```qsharp
operation _RunSingleTrainingEpoch (encodedSamples : (Microsoft.Quantum.MachineLearning.LabeledSample, Microsoft.Quantum.MachineLearning.StateGenerator)[], schedule : Microsoft.Quantum.MachineLearning.SamplingSchedule, periodScore : Int, options : Microsoft.Quantum.MachineLearning.TrainingOptions, model : Microsoft.Quantum.MachineLearning.SequentialModel, nPreviousBestMisses : Int) : (Int, Microsoft.Quantum.MachineLearning.SequentialModel)
```


## Input

### encodedSamples : ([LabeledSample](xref:Microsoft.Quantum.MachineLearning.LabeledSample),[StateGenerator](xref:Microsoft.Quantum.MachineLearning.StateGenerator))[]

The samples to be trained on.


### schedule : [SamplingSchedule](xref:Microsoft.Quantum.MachineLearning.SamplingSchedule)

A sampling schedule defining a subset of samples to be included in training.


### periodScore : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### options : [TrainingOptions](xref:Microsoft.Quantum.MachineLearning.TrainingOptions)

Options to be used in training.


### model : [SequentialModel](xref:Microsoft.Quantum.MachineLearning.SequentialModel)

The sequential model to be trained.


### nPreviousBestMisses : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The best number of misclassifications observed in previous epochs.



## Output : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),[SequentialModel](xref:Microsoft.Quantum.MachineLearning.SequentialModel))

- The smallest number of misclassifications observed through to this  epoch.- The new best sequential model found.