---
uid: Microsoft.Quantum.MachineLearning
title: Microsoft.Quantum.MachineLearning namespace
ms.date: 5/6/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.MachineLearning
qsharp.summary: >-
  This namespace provides functions and operations used in
  quantum machine learning applications.
---

# Microsoft.Quantum.MachineLearning namespace

This namespace provides functions and operations used in
quantum machine learning applications.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplySequentialClassifier](xref:Microsoft.Quantum.MachineLearning.ApplySequentialClassifier) |Given the structure and parameterization of a sequential classifier, applies the classifier to a register of qubits. |
|[EstimateClassificationProbabilities](xref:Microsoft.Quantum.MachineLearning.EstimateClassificationProbabilities) |Given a set of samples and a sequential classifier, estimates the classification probability for those samples by repeatedly measuring the output of the classifier on each sample. |
|[EstimateClassificationProbability](xref:Microsoft.Quantum.MachineLearning.EstimateClassificationProbability) |Given a sample and a sequential classifier, estimates the classification probability for that sample by repeatedly measuring the output of the classifier on the given sample. |
|[EstimateGradient](xref:Microsoft.Quantum.MachineLearning.EstimateGradient) |Estimates the training gradient for a sequential classifier at a particular model and for a given encoded input. |
|[TrainSequentialClassifier](xref:Microsoft.Quantum.MachineLearning.TrainSequentialClassifier) |Given the structure of a sequential classifier, trains the classifier on a given labeled training set. |
|[TrainSequentialClassifierAtModel](xref:Microsoft.Quantum.MachineLearning.TrainSequentialClassifierAtModel) |Given the structure of a sequential classifier, trains the classifier on a given labeled training set, starting from a particular model. |
|[ValidateSequentialClassifier](xref:Microsoft.Quantum.MachineLearning.ValidateSequentialClassifier) |Validates a given sequential classifier against a given set of pre-labeled samples. |
|[_ApplyLEOperationToRawRegister](xref:Microsoft.Quantum.MachineLearning._ApplyLEOperationToRawRegister) | |
|[_ApplyTwoQubitCase](xref:Microsoft.Quantum.MachineLearning._ApplyTwoQubitCase) | |
|[_EstimateDerivativeWithParameterShift](xref:Microsoft.Quantum.MachineLearning._EstimateDerivativeWithParameterShift) | |
|[_PrepareClassification](xref:Microsoft.Quantum.MachineLearning._PrepareClassification) | |
|[_RandomlyRescale](xref:Microsoft.Quantum.MachineLearning._RandomlyRescale) |Randomly rescales an input to either grow or shrink by a given factor. |
|[_ReflectAboutNegativeCoefficients](xref:Microsoft.Quantum.MachineLearning._ReflectAboutNegativeCoefficients) | |
|[_RunSingleTrainingEpoch](xref:Microsoft.Quantum.MachineLearning._RunSingleTrainingEpoch) |Perform one epoch of sequential classifier training on a subset of data samples. |
|[_RunSingleTrainingStep](xref:Microsoft.Quantum.MachineLearning._RunSingleTrainingStep) |attempts a single parameter update in the direction of mini batch gradient |
|[_TrainSequentialClassifierAtModel](xref:Microsoft.Quantum.MachineLearning._TrainSequentialClassifierAtModel) | |

## Functions

| Name | Summary |
|------|---------|
|[ApproximateInputEncoder](xref:Microsoft.Quantum.MachineLearning.ApproximateInputEncoder) |Given a set of coefficients and a tolerance, returns a state preparation operation that prepares each coefficient as the corresponding amplitude of a computational basis state, up to the given tolerance. |
|[CombinedStructure](xref:Microsoft.Quantum.MachineLearning.CombinedStructure) |Given one or more layers of controlled rotations, returns a single layer with model parameter index shifted such that distinct layers are parameterized by distinct model parameters. |
|[CyclicEntanglingLayer](xref:Microsoft.Quantum.MachineLearning.CyclicEntanglingLayer) |Returns an array of singly controlled rotations along a given axis, arranged cyclically across a register of qubits, and parameterized by distinct model parameters. |
|[DefaultTrainingOptions](xref:Microsoft.Quantum.MachineLearning.DefaultTrainingOptions) |Returns a default set of options for training classifiers. |
|[FeatureRegisterSize](xref:Microsoft.Quantum.MachineLearning.FeatureRegisterSize) |Returns the number of qubits required to encode a particular feature vector. |
|[InferredLabel](xref:Microsoft.Quantum.MachineLearning.InferredLabel) |Given a of classification probability and a bias, returns the label inferred from that probability. |
|[InferredLabels](xref:Microsoft.Quantum.MachineLearning.InferredLabels) |Given an array of classification probabilities and a bias, returns the label inferred from each probability. |
|[InputEncoder](xref:Microsoft.Quantum.MachineLearning.InputEncoder) |Given a set of coefficients and a tolerance, returns a state preparation operation that prepares each coefficient as the corresponding amplitude of a computational basis state. |
|[LocalRotationsLayer](xref:Microsoft.Quantum.MachineLearning.LocalRotationsLayer) |Returns an array of uncontrolled (single-qubit) rotations along a given axis, with one rotation for each qubit in a register, parameterized by distinct model parameters. |
|[Misclassifications](xref:Microsoft.Quantum.MachineLearning.Misclassifications) |Given a set of inferred labels and a set of correct labels, returns indices for where each set of labels differs. |
|[NMisclassifications](xref:Microsoft.Quantum.MachineLearning.NMisclassifications) |Given a set of inferred labels and a set of correct labels, returns the number of indices at which each set of labels differ. |
|[NQubitsRequired](xref:Microsoft.Quantum.MachineLearning.NQubitsRequired) |Returns the number of qubits required to apply a given sequential classifier. |
|[PartialRotationsLayer](xref:Microsoft.Quantum.MachineLearning.PartialRotationsLayer) |Returns an array of single-qubit rotations along a given axis, parameterized by distinct model parameters. |
|[Sampled](xref:Microsoft.Quantum.MachineLearning.Sampled) |Samples a given array, using the given schedule. |
|[ScheduleLength](xref:Microsoft.Quantum.MachineLearning.ScheduleLength) |Returns the number of elements in a given sampling schedule. |
|[_AllNearlyEqualD](xref:Microsoft.Quantum.MachineLearning._AllNearlyEqualD) | |
|[_CallFlipped](xref:Microsoft.Quantum.MachineLearning._CallFlipped) | |
|[_CanApplyTwoQubitCase](xref:Microsoft.Quantum.MachineLearning._CanApplyTwoQubitCase) | |
|[_EncodeSample](xref:Microsoft.Quantum.MachineLearning._EncodeSample) | |
|[_Features](xref:Microsoft.Quantum.MachineLearning._Features) | |
|[_Flipped](xref:Microsoft.Quantum.MachineLearning._Flipped) | |
|[_Label](xref:Microsoft.Quantum.MachineLearning._Label) | |
|[_MisclassificationRate](xref:Microsoft.Quantum.MachineLearning._MisclassificationRate) | |
|[_NegativeLocations](xref:Microsoft.Quantum.MachineLearning._NegativeLocations) | |
|[_TailMeasurement](xref:Microsoft.Quantum.MachineLearning._TailMeasurement) | |
|[_UncontrolledSpanSequence](xref:Microsoft.Quantum.MachineLearning._UncontrolledSpanSequence) | |
|[_Unnegate](xref:Microsoft.Quantum.MachineLearning._Unnegate) | |
|[_UpdatedBias](xref:Microsoft.Quantum.MachineLearning._UpdatedBias) |Returns a bias value that leads to near-minimum misclassification score. |

## User-defined types

| Name | Summary |
|------|---------|
|[ControlledRotation](xref:Microsoft.Quantum.MachineLearning.ControlledRotation) |Describes a controlled rotation in terms of its target and control indices, rotation axis, and index into a model parameter vector. |
|[LabeledSample](xref:Microsoft.Quantum.MachineLearning.LabeledSample) |A sample, labeled with a class to which that sample belongs. |
|[SamplingSchedule](xref:Microsoft.Quantum.MachineLearning.SamplingSchedule) |A schedule for drawing batches from a set of samples. |
|[SequentialModel](xref:Microsoft.Quantum.MachineLearning.SequentialModel) |Describes a quantum classifier model composed of a sequence of parameterized and controlled rotations, an assignment of rotation angles, and a bias between the two classes recognized by the model. |
|[StateGenerator](xref:Microsoft.Quantum.MachineLearning.StateGenerator) |Describes an operation that prepares a given input to a sequential classifier. |
|[TrainingOptions](xref:Microsoft.Quantum.MachineLearning.TrainingOptions) |A collection of options to be used in training quantum classifiers. |
|[ValidationResults](xref:Microsoft.Quantum.MachineLearning.ValidationResults) |The results from having validated a classifier against a set of samples. |
<!-- /summaries -->
